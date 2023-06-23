import qr from "./assets/qr-code.png";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="bg-slate-400 w-full h-full flex justify-center items-center">
        <div className="w-4/5 max-w-xs md:h-3/5">
          <div className="bg-white w-full h-full rounded-xl shadow-2xl p-7 flex-col flex gap-3">
            <div className="w-full h-3/5">
              <img src={qr} className="w-full h-full rounded-xl" />
            </div>
            <div className="w-full h-2/5 flex-col flex gap-5  md:gap-0">
              <div className="w-full h-1/2">
                <div className="text-xl font-semibold text-center">
                  Improve your front-end skills by building projects
                </div>
              </div>
              <div className="w-full h-1/2">
                <div className="font-light text-center">
                  Scan the QR code to visit frontend mentor and take your coding
                  skills to the next level
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
