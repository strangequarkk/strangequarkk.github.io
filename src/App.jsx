import { useState } from "react";
import ToggleBar from "./ToggleBar/ToggleBar";

import "./App.css";

function App() {
  const [rightBarIsOpen, setRightBarOpen] = useState(true);
  const [leftBarIsOpen, setLeftBarOpen] = useState(false);
  const leftBarClass = leftBarIsOpen ? "bar-open" : "bar-closed";
  const rightBarClass = rightBarIsOpen ? "rbar-open" : "rbar-closed";

  return (
    <div className="page">
      <nav className="navbar"> navbar content here</nav>
      <div className={"toggle-bar " + leftBarClass}>
        <ToggleBar barIsOpen={leftBarIsOpen} setBarOpen={setLeftBarOpen} />
      </div>
      <main className={"content " + leftBarClass + " " + rightBarClass}>
        <h1>content goes here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero.
        </p>

        <p>
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
          Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
          convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
          Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
          Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus
          metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
        </p>

        <p>
          Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
          diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
          magna luctus suscipit.
        </p>

        <p>
          Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
          vitae pharetra auctor, sem massa mattis sem, at interdum magna augue
          eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
          blandit dolor. Sed non quam. In vel mi sit amet augue congue
          elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus
          nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
          tincidunt malesuada tellus. Ut ultrices ultrices enim.
        </p>

        <p>
          Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
          Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
          aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
          venenatis tristique, dignissim in, ultrices sit amet, augue. Proin
          sodales libero eget ante. Nulla quam. Aenean laoreet.
        </p>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>

              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>

              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>

              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>

              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>

              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>

              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>

              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>

              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>

              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>

              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>

              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>

              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>

              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>

              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>

              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>

              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>

              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>

              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>

              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>

              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>

              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>

              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>

              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>

              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>

              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>

              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>

              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>

              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>

              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>

              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>

              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>

              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>

              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>

              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>

              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
      </main>
      <div className={"toolbar " + rightBarClass}>
        <ToggleBar barIsOpen={rightBarIsOpen} setBarOpen={setRightBarOpen} />
      </div>
    </div>
  );
}

export default App;
