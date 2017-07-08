module.exports = function (context, req) {
    //at least some very basic validation
    if (req.body && req.body.project && req.body.status) {
        context.bindings.outputSbMsg = req.body;
        context.bindings.outputSbMsg.contentType = "application/json";
    
        context.res = {
            status: 200
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please specify at least project and status properties. Message is optional."
        };
    }

    context.done();
};