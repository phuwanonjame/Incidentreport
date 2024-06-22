import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export default function Index() {
  const [messages, setMessages] = useState([
    { sender: "other", text: "จริงๆตอนนั้นก็ดีนะ" },
    { sender: "other", text: "สวัสดีครับ" },
  ]);

  const [input, setInput] = useState("");
  const [isUser, setIsUser] = useState(true);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: isUser ? "user" : "other", text: input }]);
      setInput("");
      setIsUser(!isUser);
    }
  };

  return (
    <div>
      <div className="bg-slate-100 max-h-[800px] h-[800px] overflow-auto mt-5 rounded-md">
        <div className="h-full">
          <div className="fixed flex w-[1680px] items-center justify-center bg-slate-800 text-white rounded-t-md">
            <div className="w-[500px] p-1">
              <h1 className="text-1xl text-center">Chat</h1>
            </div>

            <div className="w-full border-l-2 border-gray-800 flex items-center">
              <div className="rounded-full ml-5 p-1">
                <div>
                  <img
                    className="rounded-full p-1 shadow-md"
                    src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/155086572_2862902280650267_348992425279439368_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUAj953IaY88GXdclGrpz8vEMgoMdXGoq8QyCgx1caiizkBc5ipX6cA8aPlqlRNW-Uk1ZFEsCPTbPlT5LV5dC5&_nc_ohc=VtPI1baQVKcQ7kNvgHw2xWz&_nc_ht=scontent.fbkk28-1.fna&oh=00_AYDpMNAHjBKEmvBmLR8ub2PHrzU53ynkhilj6DwKLJW6sw&oe=668E81C2"
                    width={50}
                    alt=""
                  />
                </div>
              </div>
              <h1 className="text-1xl">Kittiphong Phuengpheng</h1>
            </div>
          </div>
          <div className="h-full flex justify-center">
            <div className="w-[500px] mt-14 shadow-lg rounded-bl-md bg-slate-600 p-1">
              <div>
                <div className="flex cursor-pointer hover:bg-slate-500 justify-center items-center bg-slate-800 text-white rounded-md">
                  <img
                    className="rounded-full p-1 shadow-md"
                    src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/155086572_2862902280650267_348992425279439368_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUAj953IaY88GXdclGrpz8vEMgoMdXGoq8QyCgx1caiizkBc5ipX6cA8aPlqlRNW-Uk1ZFEsCPTbPlT5LV5dC5&_nc_ohc=VtPI1baQVKcQ7kNvgHw2xWz&_nc_ht=scontent.fbkk28-1.fna&oh=00_AYDpMNAHjBKEmvBmLR8ub2PHrzU53ynkhilj6DwKLJW6sw&oe=668E81C2"
                    width={50}
                    alt=""
                  />
                  <h1 className="text-1xl">Kittiphong Phuengpheng</h1>
                </div>
              </div>
            </div>
            <div className="mt-14 flex flex-col overflow-auto w-full border-l-2">
              <div className="h-full">
                <div className="w-full h-full max-h-[650px]">
                  <div className="w-full h-full max-h-[650px] bg-white rounded-md flex flex-col-reverse overflow-y-auto p-5">
                    <div className="flex-1 overflow-y-auto flex flex-col-reverse">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex items-center ${
                            message.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {message.sender === "other" && (
                            <img
                              className="rounded-full p-1 shadow-md"
                              src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/155086572_2862902280650267_348992425279439368_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUAj953IaY88GXdclGrpz8vEMgoMdXGoq8QyCgx1caiizkBc5ipX6cA8aPlqlRNW-Uk1ZFEsCPTbPlT5LV5dC5&_nc_ohc=VtPI1baQVKcQ7kNvgHw2xWz&_nc_ht=scontent.fbkk28-1.fna&oh=00_AYDpMNAHjBKEmvBmLR8ub2PHrzU53ynkhilj6DwKLJW6sw&oe=668E81C2"
                              width={50}
                              alt=""
                            />
                          )}
                          <span
                            className={`p-2 rounded-md ${
                              message.sender === "user"
                                ? "bg-blue-400 text-white"
                                : "bg-slate-400"
                            }`}
                          >
                            {message.text}
                          </span>
                          {message.sender === "user" && (
                            <img
                              className="rounded-full p-1 shadow-md"
                              src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/155086572_2862902280650267_348992425279439368_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUAj953IaY88GXdclGrpz8vEMgoMdXGoq8QyCgx1caiizkBc5ipX6cA8aPlqlRNW-Uk1ZFEsCPTbPlT5LV5dC5&_nc_ohc=VtPI1baQVKcQ7kNvgHw2xWz&_nc_ht=scontent.fbkk28-1.fna&oh=00_AYDpMNAHjBKEmvBmLR8ub2PHrzU53ynkhilj6DwKLJW6sw&oe=668E81C2"
                              width={50}
                              alt=""
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <div className="w-full flex text-white bg-slate-700 rounded-md">
                  <input
                    className="w-full bg-slate-700 text-white outline-none rounded-md p-5"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleSendMessage();
                    }}
                  />
                  <div
                    className="p-1 cursor-pointer flex justify-center items-center"
                    onClick={handleSendMessage}
                  >
                    <SendIcon style={{ fontSize: 32, color: "white" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
