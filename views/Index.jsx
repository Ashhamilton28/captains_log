const React = require("react");
const DefaultLayout = require('./layout/Default')



function Index(props) {
  const { logs } = props;

  return (
    <DefaultLayout title="Captain Log Index Page">
      <nav>
        <a href="/logs/new">Create a New Log</a>
      </nav>
      
      

      <ul>
        {logs.map((log, i) => {
          return (
            <li key={log._id}>
              Captain <a href={`/logs/${log._id}`}>{log.captainName}</a> is sailing in {log.weather} weather in a boat that {" "}
              {log.isCarryingGoods
                ? "Is carrying goods"
                : "is not carrying goods"}

                .{" "} The boat {log.anyBreakages}
              {log.isCarryingGoods
                ? "has breakages"
                : "does not have any breakages"}


                {/* //edit log */}
                <a href={`/logs/${log._id}/edit`}>Edit</a>

                {/* //delete button */}
                <form method='POST' action={`/logs/${log._id}?_method=DELETE`}>
                  <input type="submit" value="DELETE"/>
                </form>
            </li>
          );
        })}
      </ul>




    </DefaultLayout>
  );
}

module.exports = Index;