import React from 'react';
import specifications from '../data/spesifications.json';

export const App = () => {
  return (
    <div>
      <ul>
        {specifications.map(spec => {
          return (
            <li key={spec.id}>
              <p>
                {spec.nearby.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
