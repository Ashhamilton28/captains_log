const React = require("react");
const DefaultLayout = require("./layout/Default");

function Edit(props) {
  const { log } = props;
  return (
    <DefaultLayout title="Edit Captain Log">
      <form method='POST' action={`/logs/${log._id}/?_method=PUT`}>
        Captain Name: <input type="text" name="captainName" defaultValue={log.captainName} />
        <br />

        Weather: <input type="text" name="weather"defaultValue={log.weather}/>
        <br />

        Is carrying goods: { log.isCarryingGoods ? 
        <input type="checkbox" name='isCarryingGoods' defaultChecked/>
         :
          <input type="checkbox" /> }
        <br />
        
        Any Breakages: { log.anyBreakages ? 
        <input type="checkbox" name='anyBreakagess' defaultChecked/>
         :
          <input type="checkbox" /> }
        <br />
        
        <input type="submit" value="Submit Changes" />
      </form>
    </DefaultLayout>
  );
}

module.exports = Edit