import earlyBirdImg from "../assets/tickets/b0_earlybird.png"
import stupidPitchImg from "../assets/tickets/b1_stupidpitch.png"
import ctfImg from "../assets/tickets/b2_ctf.png"
import treasureHunterImg from "../assets/tickets/b3_treasure_hunter.png"
import stupidAdventureImg from "../assets/tickets/b4_stupid_adventure.png"
import styles from "../App.module.scss"
import classNames from "classnames"

export function Tickets () {
  const ticketTypes = [
    {
      name: "Batch[0] = Early Bird",
      href: "https://www.facebook.com/StupidHackTH/posts/pfbid02VLgLbiSm9VeBYfDG4ueYNK9pVDazLyDB1jDsUqpjUKAVN3dwkuLpJdkw9uqzugZkl",
      imgSrc: earlyBirdImg,
    },
    {
      name: "Batch[1] = Stupid Pitch Challenge",
      href: "https://www.facebook.com/StupidHackTH/posts/pfbid033hnWHpJkqjjvQyynzUdfuU8Sq9hWfpY2VY8MdDxoWoJSpqjJJHVrxhcVFuXDLY2Gl",
      imgSrc: stupidPitchImg,
    },
    { 
      name: "Batch[2] = Beyond the Canvas, a CTF Challenge by SaltyAom",
      href: "https://www.facebook.com/StupidHackTH/posts/pfbid0ABMxzwZKtSGdpvrsXV9d1Wy3aXz64wCCSobu7LbspRYBLSFgMxhjansPj8rn2v1Vl", 
      imgSrc: ctfImg,
    },
    { 
      name: "Batch[3] = Treasure Hunter by showdown.space",
      href: "https://facebook.com/stupidhackth", 
      imgSrc: treasureHunterImg,
    },
    { 
      name: "Batch[4] = Stupid Adventure, a text game by Rayriffy",
      href: "https://facebook.com/stupidhackth", 
      imgSrc: stupidAdventureImg,
    },
    {name: "Batch 5"}
  ]
  return (
  <main class={styles["comic-panel"]}>
  <For each={ticketTypes}>
    {(type) => (
      <a
        class={classNames("group", styles["panel-item"], styles["--coming-soon"])}
        href={type.href || "https://facebook.com/stupidhackth"}
      >
        <div>
          <Show when={type.imgSrc} fallback={<p>Coming Soon...</p>}>
            <img src={type.imgSrc} alt={type.name + " ticket"} />
          </Show>
        </div>
      </a>
    )}
  </For></main>)
}
