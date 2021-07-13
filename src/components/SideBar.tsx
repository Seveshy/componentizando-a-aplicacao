import { Button } from './Button'
import '../styles/sidebar.scss';
interface GenreItemsList {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface GenreProps {
  genres: Array<GenreItemsList>
  selectedGenreId: number
  onHandleClickItemSideBar(id: number): void
}

export function SideBar({ genres, selectedGenreId, onHandleClickItemSideBar }: GenreProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onHandleClickItemSideBar(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}