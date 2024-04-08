import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-gray-200 min-h-screen">
      <div className="w-4/5 grid grid-cols-1 gap-5">
        <div className="flex items-center gap-5">
          <Image src="/hangman.jpg" alt="Bot 1" width={200} height={200} />
          <div>
            <h1>Bot 1</h1>
            <p>Description for Bot 1</p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1189452640912945212&permissions=8&scope=bot"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Invite Hangman to your server</span>
              <span className="hidden hover:block ml-2">😊</span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Image
            src="/maxresdefault.jpg"
            alt="Bot 2"
            width={200}
            height={200}
          />
          <div>
            <h1>Bot 2</h1>
            <p>Description for Bot 2</p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1200565821718675638&permissions=8&scope=bot"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Invite Intro bot to your server</span>
              <span className="hidden hover:block ml-2">😊</span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Image src="/bot3.jpg" alt="Bot 3" width={200} height={200} />
          <div>
            <h1>Bot 3</h1>
            <p>Description for Bot 3</p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1225795357238104074&permissions=8&scope=bot"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Invite game of the day bot to your server</span>
              <span className="hidden hover:block ml-2">😊</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
