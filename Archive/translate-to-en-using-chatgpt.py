# -*- coding: utf-8 -*-

import os
import openai
import env

# 设置OpenAI API Key和API Base，这两个密钥存放在当前路径的 env.py 中
openai.api_key = os.environ.get('CHATGPT_API_KEY')
openai.api_base = os.environ.get('CHATGPT_API_BASE')

# 设置路径
dir_to_translate = "../draft/to-translate"
dir_translated = "../docs/en"

# 创建一个包含多个替换规则的列表
replace_rules = [
    {"find": "> 原文地址：<https://wiki-power.com/>", "replace_with": "> Original: <https://wiki-power.com/>"},
    {"find": "> 本篇文章受 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议保护，转载请注明出处。", "replace_with": "> This post is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution."},
    {"find": "](https://wiki-power.com/", "replace_with": "](https://wiki-power.com/en/"},
    {"find": "![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/", "replace_with": "![](https://f004.backblazeb2.com/file/wiki-media/"},
    {"find": "](/en/", "replace_with": "](https://wiki-power.com/en/"},
    #{"find": "", "replace_with": ""},
]

# 定义翻译函数
def translate_text(text):
     
    # 使用OpenAI API进行翻译
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": "Translate the following Chinese article into English, maintain the original markdown format.\n\n{}\n\nEnglish:".format(
                    text
                ),
            }
        ],
    )

    # 获取翻译结果
    output_text = completion.choices[0].message.content

    return output_text


# 定义文章拆分函数
def split_text(text, max_length):
    # 根据段落拆分文章
    paragraphs = text.split("\n\n")
    output_paragraphs = []
    current_paragraph = ""

    for paragraph in paragraphs:
        if len(current_paragraph) + len(paragraph) + 2 <= max_length:
            # 如果当前段落加上新段落的长度不超过最大长度，就将它们合并
            if current_paragraph:
                current_paragraph += "\n\n"
            current_paragraph += paragraph
        else:
            # 否则将当前段落添加到输出列表中，并重新开始一个新段落
            output_paragraphs.append(current_paragraph)
            current_paragraph = paragraph

    # 将最后一个段落添加到输出列表中
    if current_paragraph:
        output_paragraphs.append(current_paragraph)

    # 将输出段落合并为字符串
    output_text = "\n\n".join(output_paragraphs)

    return output_text

# 定义翻译文件函数
def translate_file(input_file, output_file, max_length=1800):
    # 读取输入文件内容
    with open(input_file, "r", encoding="utf-8") as f:
        input_text = f.read()

    # 创建一个字典来存储占位词和对应的替换文本
    placeholder_dict = {}

    # 使用 for 循环应用替换规则，并将匹配的文本替换为占位词
    for i, rule in enumerate(replace_rules):
        find_text = rule["find"]
        replace_with = rule["replace_with"]
        placeholder = f"to_be_replace[{i + 1}]"
        input_text = input_text.replace(find_text, placeholder)
        placeholder_dict[placeholder] = replace_with

    #print(input_text)

    # 拆分文章
    paragraphs = input_text.split("\n\n")
    input_text = ""
    output_paragraphs = []
    current_paragraph = ""

    for paragraph in paragraphs:
        if len(current_paragraph) + len(paragraph) + 2 <= max_length:
            # 如果当前段落加上新段落的长度不超过最大长度，就将它们合并
            if current_paragraph:
                current_paragraph += "\n\n"
            current_paragraph += paragraph
        else:
            # 否则翻译当前段落，并将翻译结果添加到输出列表中
            output_paragraphs.append(translate_text(current_paragraph))
            current_paragraph = paragraph

    # 处理最后一个段落
    if current_paragraph:
        if len(current_paragraph) + len(input_text) <= max_length:
            # 如果当前段落加上之前的文本长度不超过最大长度，就将它们合并
            input_text += "\n\n" + current_paragraph
        else:
            # 否则翻译当前段落，并将翻译结果添加到输出列表中
            output_paragraphs.append(translate_text(current_paragraph))

    # 如果还有未翻译的文本，就将它们添加到输出列表中
    if input_text:
        output_paragraphs.append(translate_text(input_text))

    # 将输出段落合并为字符串
    output_text = "\n\n".join(output_paragraphs)

    # 加入由 ChatGPT 翻译的提示
    output_text=output_text+"\n\n> This post is translated using ChatGPT, please [**feedback**](https://github.com/linyuxuanlin/Wiki_MkDocs/issues/new) if any omissions."

    # 最后，将占位词替换为对应的替换文本
    for placeholder, replacement in placeholder_dict.items():
        output_text = output_text.replace(placeholder, replacement)

    # 写入输出文件
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(output_text)

    os.remove(input_file)

# 按文件名称顺序排序
file_list = os.listdir(dir_to_translate)
sorted_file_list = sorted(file_list)
#print(sorted_file_list)

# 遍历目录下的所有.md文件，并进行翻译
for filename in sorted_file_list:
    if filename.endswith(".md"):
        input_file = os.path.join(dir_to_translate, filename)
        output_file = os.path.join(dir_translated, filename)
        with open(input_file, 'r', encoding='utf-8') as f:
            md_content = f.read()
        if "> This post is only available in English." in md_content:
            print("Pass the EN post: ", filename)
            os.remove(input_file)
        elif filename=="index.md" or filename=="Contact-and-Subscribe.md" or filename=="WeChat.md":
            os.remove(input_file)
            print("Pass the post: ", filename)
        else:
            print("Translating: ", filename)
            translate_file(input_file, output_file)