install-client:
		cd client && yarn install
install-server:
		cd client && yarn install
install:
		make install-client && make install-server