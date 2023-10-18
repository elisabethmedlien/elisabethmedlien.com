import { FC } from "react";
import "./AquariumHealthMethrics.css";

export interface HealthMethrics {
  nh4: number;
  no2: number;
  no3: number;
  ph: number;
  kh?: number;
}

const AquariumHealthMethrics: FC<HealthMethrics> = ({
  nh4,
  no2,
  no3,
  ph,
  kh,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Akvarieparametere</th>
          <th>Kjemisk forbindelse</th>
          <th>Verdi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ammoniakk</td>
          <td>
            NH<sub>4</sub>
          </td>
          <td>{nh4 === 0.05 ? <>&lt; {nh4}</> : nh4}</td>
        </tr>
        <tr>
          <td>Nitritt</td>
          <td>
            NO<sub>2</sub>
          </td>
          <td>{no2 === 0.001 ? <>&gt; {no2}</> : no2}</td>
        </tr>
        <tr>
          <td>Nitrat</td>
          <td>
            NO<sub>3</sub>
          </td>
          <td>{no3 === 0.05 ? <>&gt; {no3}</> : no3}</td>
        </tr>
        <tr>
          <td>PH</td>
          <td>-</td>
          <td>{ph}</td>
        </tr>
        <tr>
          <td>Karbonathardhet</td>
          <td>KH</td>
          <td>{kh ? `${kh} dKH` : "–"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AquariumHealthMethrics;
