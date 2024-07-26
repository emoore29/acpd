"use client";

export default function Home() {
  return (
    <main>
      <p>
        This was designed to assist web developers and designers in creating
        accessible colour palettes. To use the tool:
      </p>
      <br />
      <ol>
        <li>
          Select colours for your palette using the hex input fields and/or
          colour pickers below.
        </li>
        <li>
          Colour contrasts between each colour in your palette will be
          generated. Each colour will be included as both a background colour
          and a text colour.
        </li>
        <li>
          To exclude colours from the combinations, use the exclude as
          background/text checkboxes accordingly. To exclude a colour
          completely, check both exclude as background and exclude as text.
        </li>
        <li>
          Black and white backgrounds and/or text can also be included in the
          combinations by utilising their respective checkboxes.
        </li>
        <li>
          For an ideal colour palette, select combinations from the AAA
          (Enhanced Contrast) category. Avoid using low contrast colours (these
          have been hidden by default).
        </li>
      </ol>
      <br />
      <p>
        For more information, see{" "}
        <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">
          Web Content Accessibility Guidelines (WCAG)
        </a>
        . Feedback via <a href="https://github.com/emoore29">GitHub</a> is
        welcome!
      </p>
    </main>
  );
}
