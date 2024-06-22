export default function New() {
  return (
    <div className=" absolute w-full h-[850px] max-h-[850px] ">
      <div className="w-full h-full bg-slate-50 ">
        <div className="p-2">
          <span>New-Incident: INC0001</span>
        </div>
        <div className="p-2">
          <div className="flex justify-around gap-6 text-sm">
            <div className="">
              <div className=" flex items-center gap-4">
                <div className="w-32">
                  <span>INC-ID:</span>
                </div>

                <div>
                  <input
                    className=" w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                    type="text"
                  ></input>
                </div>
              </div>

              <div className=" flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Caller:</span>
                </div>
                <div>
                  <input
                    className=" w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className=" flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>User-ID:</span>
                </div>
                <input
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="text"
                ></input>
              </div>
              <div className=" flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Category:</span>
                </div>
                <select className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none">
                  <option value=""></option>

                  <option value="">Software</option>
                  <option value="">Headware</option>
                  <option value="">IP-Phone</option>
                </select>
              </div>
              <div className=" flex items-center mt-2 gap-4">
                <div className="w-32">
                  <span>Location:</span>
                </div>
                <select className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none">
                  <option value=""></option>

                  <option value="">สำนักงานใหญ่</option>
                  <option value="">สาขา</option>
                </select>
              </div>
            </div>
            <div className=" ">
              <div className=" flex items-center  gap-4">
                <div className="w-32">
                  <span>Opened:</span>
                </div>
                <input
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              <div className=" flex items-center mt-2  gap-4">
                <div className="w-32">
                  <span>Opened By:</span>
                </div>
                <input
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className=" flex items-center mt-2  gap-4">
                <div className="w-32">
                  <span>Contect Number:</span>
                </div>
                <input
                  className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className=" flex items-center mt-2  gap-4">
                <div className="w-32">
                  <span>Incident State </span>
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
              <div className=" flex items-center mt-2  gap-4">
                <div className="w-32 ">
                  <span>Assignment Group: </span>
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
              <div className=" flex items-center mt-2  gap-4">
                <div className="w-32 ">
                  <span>Assigned to: </span>
                </div>
                <select className="w-72 rounded-md bg-white border-gray-300 border p-1 outline-none">
                  <option value=""></option>
                  <option value="">itsupprt01</option>
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
                name=""
                id=""
              />
            </div>
            <div className="w-full flex p-5  gap-3">
              <div className="w-32">
                <span>* Symptom :</span>
              </div>

              <textarea
                className="w-full h-72 rounded-md bg-white border-gray-300 border p-1 outline-none"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
