#!/usr/bin/env python

from flask import Flask, send_file
from os import path, getcwd

app = Flask(__name__)

@app.route('/')
def html():
    return send_file(path.join(getcwd(), 'test', 'browser.test.html'))

@app.route('/gh-host.js')
def js():
    return send_file(path.join(getcwd(), 'build', 'gh-host.js'))

@app.route('/gh-host.min.js')
def min_js():
    return send_file(path.join(getcwd(), 'build', 'gh-host.min.js'))

if __name__ == '__main__':
    app.run(
        port=8000,
        host='0.0.0.0'
    )