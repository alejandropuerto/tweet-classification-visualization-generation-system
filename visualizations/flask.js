// JS to Python

// GET

@app.route('/getmethod/<jsdata>')
def get_javascript_data(jsdata):
    return json.loads(jsdata)[0]

// POST

@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    jsdata = request.form['javascript_data']
    return json.loads(jsdata)[0]


// AJAX GET

$.get( "/getmethod/<javascript_data>" );

// AJAX POST

$.post( "/postmethod", {
    javascript_data: data 
});


json.loads(jsdata)[0]


// Python to JS

// GET

@app.route('/getpythondata')
def get_python_data():
    return json.dumps(pythondata)

// POST

$.get("/getpythondata", function(data) {
    console.log($.parseJSON(data))
})