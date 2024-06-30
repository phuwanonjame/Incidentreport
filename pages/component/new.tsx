import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface NewProps {
  openInc: boolean;
  setOpenInc: (value: boolean) => void;
}

const New: React.FC<NewProps> = ({ openInc, setOpenInc }) => {
  const [Caller, setCaller] = useState("");
  const [User_id, setUser_id] = useState("");
  const [Category, setCategory] = useState("");
  const [Location, setLocation] = useState("");
  const [Data, setData] = useState("");
  const [openby, setOpenby] = useState("");
  const [contact, setContact] = useState("");
  function NewReport() {
    console.log(Caller);
    console.log(User_id);
    console.log(Category);
    console.log(Location);
    console.log(Data);
  }
  return (
    <div className="max-md:flex max-md:w-full max-md:h-full absolute w-full h-[850px] max-h-[850px]">
      <div className="w-full h-full bg-slate-50">
        <div
          className="  flex w-10 justify-center items-center rounded-md   p-1 cursor-pointer "
          onClick={() => setOpenInc(false)}
        >
          <ArrowBackIosIcon
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "blue",
            }}
          />
        </div>
        <div className="p-2">
          <span>New-Incident: INC0001</span>
        </div>
        <div className="p-2 max-md:p-4">
          <div className="flex max-md:flex-col justify-around gap-6 text-sm">
            <div className="">
              <div className="flex items-center gap-4">
                <div className="w-32">
                  <span>INC-ID:</span>
                </div>
                <div>
                  <input
                    className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Caller:</span>
                </div>
                <div>
                  <input
                    className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                    type="text"
                    value={Caller}
                    onChange={(e) => setCaller(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>User-ID:</span>
                </div>
                <input
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="text"
                  value={User_id}
                  onChange={(e) => setUser_id(e.target.value)}
                ></input>
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Category:</span>
                </div>
                <select
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Software">Software</option>
                  <option value="Hardware">Hardware</option>
                  <option value="IP-Phone">IP-Phone</option>
                </select>
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Location:</span>
                </div>
                <select
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value=""></option>
                  <option value="สำนักงานใหญ่">สำนักงานใหญ่</option>
                  <option value="สาขา">สาขา</option>
                </select>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-4">
                <div className="w-32">
                  <span>Opened:</span>
                </div>
                <input
                  value={Data}
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="date"
                  name=""
                  id=""
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Opened By:</span>
                </div>
                <input
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="text"
                  name=""
                  id=""
                  value={openby}
                  onChange={(e) => setOpenby(e.target.value)}
                />
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Contact Number:</span>
                </div>
                <input
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="number"
                  name=""
                  id=""
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Incident State:</span>
                </div>
                <select className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none">
                  <option value=""></option>
                  <option value="">Active</option>
                  <option value="">Resolved</option>
                  <option value="">In Progress</option>
                  <option value="">Unresolved</option>
                  <option value="">Close</option>
                </select>
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Assignment Group:</span>
                </div>
                <select className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none">
                  <option value=""></option>
                  <option value="">Active</option>
                  <option value="">Resolved</option>
                  <option value="">In Progress</option>
                  <option value="">Unresolved</option>
                  <option value="">Close</option>
                </select>
              </div>
              <div className="flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Assigned to:</span>
                </div>
                <select className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none">
                  <option value=""></option>
                  <option value="">itsupport01</option>
                  <option value="">itsupport30</option>
                  <option value="">itsupport26</option>
                  <option value="">itsupport03</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-sm w-full">
            <div className="w-full flex p-5 items-center gap-3">
              <div className="w-32">
                <span>Summary:</span>
              </div>
              <input
                className="w-full rounded-md bg-white border-gray-300 border p-1 outline-none"
                type="text"
              />
            </div>
            <div className="w-full flex p-5 gap-3">
              <div className="w-32">
                <span>* Symptom:</span>
              </div>
              <textarea
                className="w-full h-72 max-h-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                name=""
                id=""
              />
            </div>
          </div>
          <button onClick={() => NewReport()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default New;
