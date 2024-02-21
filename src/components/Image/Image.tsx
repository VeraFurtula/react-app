interface Props {
  path: string;
  className: string;
}

const Image = ({ path, className }: Props) => {
  return <img src={path} className={className} />;
};

export default Image;
