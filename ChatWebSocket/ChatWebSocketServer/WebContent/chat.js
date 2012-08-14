$(function() {
	var webSocket;
	var username;

	var chatLog = $("#chatLog");

	var joinButton = $("#joinButton").click(join);
	var leaveButton = $("#leaveButton").click(leave);
	var sendButton = $("#sendButton").click(sendMessage);
	var message = $("#message");

	// start web socket handshake and attach event listeners to the newly created web socket
	function join() {
		if(!webSocket && $("#username").val()) {
			username = $("#username").val();
			webSocket = new WebSocket("ws://192.168.1.3:8080/ChatWebSocketServer/ChatWebSocketServlet");
			webSocket.onopen = startNegotiation;
			webSocket.onmessage = onmessage;
			webSocket.onerror = onerror;
			webSocket.onclose = onclose;
		}
	}

	function leave() {
		// notify all users that user is leaving the chat room
		webSocket.send(username + ":::" + "just left the chat room");
		close();
		leaveButton.attr("disabled", "disabled");
	}

	function sendMessage() {
		if(message.val()) {
			// send message to the socket channel
			webSocket.send(username + ":::" + message.val());
		}
	}

	function startNegotiation() {
		console.log("Connection opened");
		// start the negotiation of the chosen username
		webSocket.send("negotiateUsername" + ":::" + username);
	};

	// manage incoming message
	function onmessage(event) {
		console.log("New message: " + event.data);
		// username negotiation message
		if(event.data.indexOf("negotiateUsername") === 0) {
			if(event.data == "negotiateUsername:::OK") {
				webSocket.send(username + ":::" + "joined the chat room");
				joinButton.attr("disabled", "disabled");
				sendButton.removeAttr("disabled");
				leaveButton.removeAttr("disabled");
			} else {
				chatLog.append("USERNAME ALREADY TAKEN<br/>");
			}
		} else {
			// standard message from another user
			var user = event.data.split(":::")[0];
			var msg = event.data.split(":::")[1];
			chatLog.append('<div class="user">'+ user + '</div> - <div class="msg">' + msg + '</div><br/>');
		}
	};

	function onclose(event) {
		console.log("Connection closed");
		// free the webSocket variable
		webSocket = null;
		// empty the chat log
		chatLog.html("");
		sendButton.attr("disabled", "disabled");
		joinButton.removeAttr("disabled"); 
	}
 
	function error(event) { 
		console.log("Error");
		// on error, we close the web socket 
		close();
	};

	function close(event) {
		webSocket.close();
	};
});

