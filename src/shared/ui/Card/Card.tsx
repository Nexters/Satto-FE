import { twMerge } from "tailwind-merge";
import Chip from "../Chip/Chip";
import { type ReactNode } from "react";
import { Ball, type BallProps } from "../Ball";
import crownPng from "../../assets/images/ball/crown.png";

import { type CardProps, type CardMProps, type CardSProps } from "./Card.types";
import { cardM, cardS } from "./Card.styles";

function BallsRow({
  numbers,
  bonusBall,
  iconRight,
  className,
}: {
  numbers?: { number: number; color: BallProps["color"] }[];
  bonusBall?: { number: number; color: BallProps["color"] };
  iconRight?: ReactNode;
  className?: string;
}) {
  const ordered: { number: number; color: BallProps["color"] }[] = [];
  if (numbers && numbers.length) {
    const order: Array<{ color: BallProps["color"]; count: number }> = [
      { color: "yellow", count: 1 },
      { color: "blue", count: 2 },
      { color: "red", count: 2 },
      { color: "gray", count: 1 },
      { color: "green", count: 1 },
    ];
    for (const { color, count } of order) {
      const picked = numbers.filter((b) => b.color === color).slice(0, count);
      ordered.push(...picked);
    }
  }

  return (
    <div className={twMerge(cardM.ballsRow, className)}>
      {(ordered.length ? ordered : numbers)
        ?.slice(0, 6)
        .map(({ number, color }, idx) => (
          <Ball
            key={`${number}-${idx}`}
            number={number}
            color={color}
            className={cardM.ballWrap}
          />
        ))}
      {bonusBall ? <span className={cardM.bonusDivider}>+</span> : null}
      {bonusBall ? (
        <Ball
          key={`bonus-${bonusBall.number}`}
          number={bonusBall.number}
          color={bonusBall.color}
          className={cardM.ballWrap}
        />
      ) : null}
      {iconRight ? <div className={cardM.iconRight}>{iconRight}</div> : null}
    </div>
  );
}

function CardMView(props: CardMProps) {
  const {
    className,
    title,
    date,
    chipLabel = "참여",
    chipVisible = true,
    balls,
    bonusBall,
    iconRight,
    footerLeft,
    footerRight,
    ...rest
  } = props;

  return (
    <div className={twMerge(cardM.container, className)} {...rest}>
      <div className={cardM.header}>
        <div className={cardM.title}>{title}</div>
        <div className={cardM.divider} />
        {date ? <div className={cardM.date}>{date}</div> : null}
        {chipVisible ? (
          <Chip
            variant="border"
            shape="square"
            color="primary"
            className="ml-auto"
          >
            {chipLabel}
          </Chip>
        ) : null}
      </div>

      <BallsRow numbers={balls} bonusBall={bonusBall} iconRight={iconRight} />

      {footerLeft || footerRight ? (
        <div className={cardM.footerBadge}>
          {footerLeft ? (
            <span className={cardM.footerText}>{footerLeft}</span>
          ) : null}
          {footerLeft && footerRight ? (
            <span className={cardM.footerDot} />
          ) : null}
          {footerRight ? (
            <span className={cardM.footerText}>{footerRight}</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function CardSView(props: CardSProps) {
  const { className, title, ball, rank, ...rest } = props;

  return (
    <div className={twMerge(cardS.container, className)} {...rest}>
      {ball ? (
        <Ball
          number={ball.number}
          color={ball.color}
          className={cardS.ballWrap}
        />
      ) : null}

      <div className={cardS.textWrap}>
        {rank ? (
          <div className={cardS.rankRow}>
            <div className={cardS.rank}>{rank}위</div>
            {rank === 1 ? (
              <img src={crownPng} alt="crown" className={cardS.rankIcon} />
            ) : null}
          </div>
        ) : null}
        <div className={cardS.title}>{title}</div>
      </div>
    </div>
  );
}

export function Card(props: CardProps) {
  if (props.size === "M") return <CardMView {...props} />;
  return <CardSView {...props} />;
}

export default Card;
