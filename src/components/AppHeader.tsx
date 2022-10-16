interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return (
    <header>
      <h1>{title.length >= 5 ? title : "The title is a work in progress"}</h1>
    </header>
  );
}
