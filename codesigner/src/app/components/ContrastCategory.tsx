import styles from "../page.module.css";
import ContrastPair from "./ContrastPair";
import { useState } from "react";

interface RgbColor {
  rgb: number[];
}

interface CombinationsProps {
  colorArray: [[RgbColor, string], [RgbColor, string], number][];
  contrastCategory: string;
}

export default function ContrastCategory({
  colorArray,
  contrastCategory,
}: CombinationsProps) {
  const [displayLowContrast, setDisplayLowContrast] = useState(false);

  return (
    <div className={styles.contrastCategory}>
      {contrastCategory === "AAA" ? (
        <>
          <h3>Enhanced (AAA)</h3>
        </>
      ) : contrastCategory === "AA" ? (
        <>
          <h3>Minimum (AA)</h3>
        </>
      ) : (
        <>
          <h3>
            Low
            <button
              className={styles.displayLowContrast}
              onClick={() => setDisplayLowContrast((prev) => !prev)}
            >
              {!displayLowContrast
                ? `Show ${colorArray.length} combinations`
                : "Hide combinations"}
            </button>
          </h3>
        </>
      )}

      <section className={styles.contrastPairs}>
        {
          // By default, do not display low contrast combinations
          contrastCategory === "Low" && !displayLowContrast
            ? ""
            : // Otherwise, for AAA, AA, and low (where user has chosen to display them), display contrast pairs
              colorArray.map(
                (
                  pair: [[RgbColor, string], [RgbColor, string], number],
                  index: number
                ) => {
                  const color1 = pair[0][0].rgb;
                  const color2 = pair[1][0].rgb;
                  const contrast = pair[2];

                  return (
                    <>
                      <ContrastPair
                        key={index}
                        color1={`${color1}`}
                        color2={`${color2}`}
                        contrast={contrast}
                        contrastCategory={contrastCategory}
                      />
                    </>
                  );
                }
              )
        }
      </section>
    </div>
  );
}
