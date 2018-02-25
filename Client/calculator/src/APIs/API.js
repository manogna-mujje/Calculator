
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

var url;
export const calculate = function (leftOperand, rightOperand, operation, object){
    switch(operation){
        case '+':
            url = `${api}/sum`;
            break;
        case '-':
            url = `${api}/difference`;
            break;
        case '*':
            url = `${api}/product`;
            break;
        case '/':
            url = `${api}/quotient`;
            break; 
    }

    fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  left: leftOperand,
                  right: rightOperand,
                  op: operation
              })
            })
            .then(res => {
            res.json()
              .then((data) => {
              console.log(data);
              object.setState({
                  displayText: data,
              });
              return data;
          }, (err) => {
              console.log(err);
          } )
      });    
  };

  