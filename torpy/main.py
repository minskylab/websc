import requests


def main():
    session = requests.session()
    session.proxies = {}

    session.proxies['http'] = 'socks5h://localhost:9050'
    session.proxies['https'] = 'socks5h://localhost:9050'

    r = session.get("http://httpbin.org/ip")
    print(r.text)


if __name__ == '__main__':
    main()
