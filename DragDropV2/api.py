import tornado.ioloop
import tornado.web
import tinremote

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")
        tinremote.takecontrol()
        tinremote.issuecommand( 23, "blue" )

application = tornado.web.Application([
    (r"/", MainHandler),
])

if __name__ == "__main__":
    application.listen(8888)
    tinremote.connect( 'host', 'text' )
    tornado.ioloop.IOLoop.current().start()
    tinremote.disconnect()