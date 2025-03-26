import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex flex-row gap-2 align-center">
          <li>
            <Link className="p-8" href="/">
              Twitch
            </Link>
          </li>
          <li>
            <Link className="p-8" href="/youtube">
              Youtube
            </Link>
          </li>
          <li>
            <Link className="p-8" href="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="p-8" href="/settings">
              Settings
            </Link>
          </li>
          <li>
            <Link className="p-8" href="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
