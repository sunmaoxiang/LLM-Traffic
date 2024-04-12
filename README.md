# 前期准备：

## flask下的main.py中ChatOpenAI函数中base_url参数要填写大模型接口地址

```py
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, base_url='')
```

## 本地环境需要设置OPENAI的token
```shell
export OPENAI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxx
```


