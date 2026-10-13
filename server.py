#!/usr/bin/env python3
"""
Simple HTTP Server for Senterra Energy website preview.
Serves files from the current working directory with proper MIME types.
"""
import http.server
import socketserver
import os
import sys

PORT = int(os.environ.get("PORT", 8080))

class CustomHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and caching headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def run_server(port=PORT):
    for p in range(port, port + 20):
        try:
            with socketserver.TCPServer(
                ("0.0.0.0", p), CustomHTTPHandler
            ) as httpd:
                print(f"Website running on port {p}")
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError as e:
            if "Address already in use" in str(e):
                continue
            raise

if __name__ == "__main__":
    run_server()
