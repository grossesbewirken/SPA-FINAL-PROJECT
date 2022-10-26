const ShowSherdsHeader = ({filterHeader}) => {
  return (
    <div>
      {filterHeader === 'nothing' ? <h1 className="favcart-hl">your favorites</h1> :
        filterHeader === 'movie' ? <h1 className="favcart-hl">movies && series</h1> :
        filterHeader === 'music' ? <h1 className="favcart-hl">songs</h1> :
        filterHeader === 'philosophy' ? <h1 className="favcart-hl">nerdic philosophy</h1> : <></>
      }
    </div>
  );
};

export default ShowSherdsHeader;