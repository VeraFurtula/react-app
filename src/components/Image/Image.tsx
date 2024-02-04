interface Props {
  path: string;
  imeKlase: string;
}

const Image = ({ path, imeKlase }: Props) => {
  return <img src={path} className={imeKlase} />;
};

export default Image;
