import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed flex bg-white z-10 w-full sm:text-lg text-xs">
       <a className="header-a" href="/">トップ</a>
       <a className="header-a" href="/Products">製品紹介</a>
       <a className="header-a" href="/Stop">ポリシー</a>
       <a className="header-a" href="/Stop">Aveilaについて</a>
    </div>
  );
};

export default Header;