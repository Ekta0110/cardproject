import './Records.json'

{
    Records.map( record => {
      return(
        <div className='box' key={ Records.id }>
          { Records.userId}
          <strong>{ Records.title }</strong>
          { Records.body }
        </div>
      )
    })
  }