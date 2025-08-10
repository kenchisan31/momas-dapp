import React from 'react';

// Component Footer mới, dễ dàng tái sử dụng
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-6 shadow-inner mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-semibold">Các nhà tài trợ chính</p>
        <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-12">
          {/* Logo của Binance. Bạn có thể thay thế bằng logo thực tế */}
          <img 
            src="https://placehold.co/120x40/f0b90b/000000?text=Binance" 
            alt="Logo Binance" 
            className="h-10 object-contain rounded-lg"
          />
          {/* Logo của a16z */}
          <img 
            src="https://placehold.co/120x40/000/fff?text=a16z" 
            alt="Logo a16z" 
            className="h-10 object-contain rounded-lg"
          />
          {/* Logo của đối tác khác */}
          <img 
            src="https://placehold.co/120x40/5c5cff/ffffff?text=Partner+1" 
            alt="Logo đối tác khác" 
            className="h-10 object-contain rounded-lg"
          />
        </div>
        <p className="mt-6 text-sm">© 2025 Momas Dapp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Component Header mới
const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg p-4">
      <nav className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Momas Dapp</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 transition-colors">
              Momoas Botnet
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 transition-colors">
              Momoas Authenticate
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 transition-colors">
              Sortie
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 transition-colors">
              Documentation
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white transition-colors">
              Deployal
            </a>
          </div>
          <div className="flex">
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0 transition-colors">
              BUY MOMOS
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Main application component
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* Sử dụng component Header mới */}
      <Header />

      {/* Phần nội dung chính của ứng dụng bạn có thể đặt ở đây */}
      <main className="flex-grow container mx-auto p-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Stake Momos</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span>GO Howmoo free omg alt title</span>
              <span>0.00</span>
            </div>
            <div className="flex items-center justify-between text-lg">
              <span>GCDT Baitana</span>
              <span>0.00</span>
            </div>
            <div className="flex items-center justify-between text-lg">
              <span>VAET Trinamiti</span>
              <span>0.00</span>
            </div>
            
            <div className="flex items-center justify-between bg-gray-700 rounded-lg p-2">
              <input 
                type="number" 
                placeholder="1" 
                className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
                BUY
              </button>
            </div>
            <div className="text-center text-sm text-gray-400">
              <p>Voe siff eucitice titamo</p>
              <p>O/OO</p>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg text-lg transition-colors">
              Nihwas on th aoena
            </button>
          </div>
        </div>
      </main>

      {/* Sử dụng component Footer mới */}
      <Footer />
    </div>
  );
}
