from flask import Flask, request
import os
from flask_cors import CORS
import getpass
from langchain_community.utilities import SQLDatabase
from langchain.chains import create_sql_query_chain
from langchain_openai import ChatOpenAI
from langchain_community.tools.sql_database.tool import QuerySQLDataBaseTool
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough
from operator import itemgetter



llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, base_url='https://api.xty.app/v1')
answer =  llm | StrOutputParser()
# answer =  llm | StrOutputParser()
app = Flask(__name__)
CORS(app)
db = SQLDatabase.from_uri("sqlite:///city_data.db")


execute_query = QuerySQLDataBaseTool(db=db)
write_query = create_sql_query_chain(llm, db)
# chain = (
#     RunnablePassthrough.assign(query=write_query).assign(
#         result=itemgetter("query") | execute_query
#     )
#     | answer
# )


@app.route('/api/llm', methods=['POST'])
def process_statement():
    statement = request.get_json().get('request')
    response = write_query.invoke({"question": statement})
    # print(response)
    return response
if __name__ == '__main__':
    app.run(host='0.0.0.0')




