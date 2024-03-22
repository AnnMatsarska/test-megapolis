import css from './Description.module.css';
import specifications from '../../data/spesifications.json';
import { ListItem } from './ListItem';

export const Description = () => {
  return (
    <div className="container">
      <section className={css.descSection}>
        <h2 className={css.sectionTitle}>Адреси</h2>
        <ul className={css.list}>
          {specifications.map(spec => (
            <ListItem key={spec.id} spec={spec} />
          ))}
        </ul>
      </section>
    </div>
  );
};
