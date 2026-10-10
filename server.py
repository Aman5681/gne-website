#!/usr/bin/env python3
"""
Simple HTTP Server for Senterra Energy website preview.
Serves files from the current working directory with proper MIME types.
"""
import http.server
import socketserver
import os
import sys

PORT = 8080

class CustomHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and caching headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def run_server(port=PORT):
    # Try the specified port or find the next available port
    for p in range(port, port + 20):
        try:
            with socketserver.TCPServer(("", p), CustomHTTPHandler) as httpd:
                print(f"==================================================")
                print(f" Senterra Energy UI Server running successfully!")
                print(f" URL: http://localhost:{p}")
                print(f" Directory: {os.getcwd()}")
                print(f"==================================================")
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError as e:
            if "Address already in use" in str(e):
                continue
            else:
                print(f"Error starting server on port {p}: {e}")
                sys.exit(1)

if __name__ == "__main__":
    port_arg = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    run_server(port_arg)
