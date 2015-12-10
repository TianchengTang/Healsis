from flask import json
from flask import Flask, jsonify, render_template, request
import traceback

app = Flask(__name__)

#@app.route('/')
#ef index():
#	return render_template("index.html")
@app.route('/', methods=["GET"])
def xxxdata():
	try:
		return "jinsili"
	except Exception:
		return traceback.format_exc()
if __name__ == "__main__":
	#app.run(host = "127.0.0.1",port = 8000, debug = True)
	app.run()