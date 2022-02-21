/*
* This is the navbar component at the top of the application.  It accepts child elements which could be buttons or menus.
* When adding additional menus or buttons, you made need to adjust the layout of the calendar title or position them
* absolutely
*/

interface NavbarProps {
  children: JSX.Element | JSX.Element[] | null;
  month: string;
  year: number;
}

export default function Navbar({children, month, year}:NavbarProps):JSX.Element {
  return (
    <div className={"h-1/10 border-b-2 border-blue-500 bg-gray-900"}>
      <div className={"text-4xl text-center py-5 text-gray-100"}>{month} {year}</div>
      {children}
    </div>
  );
}