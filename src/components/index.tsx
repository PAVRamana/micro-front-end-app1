import { useEffect, useState } from "react";

interface MyProps {
  props: string;
}

function App({ props }: MyProps): JSX.Element {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const pluginHelper = (window as any).PluginHelper;

    if (pluginHelper) {
      const currentUserName = pluginHelper && pluginHelper.getCurrentUsername();
      if (!currentUserName) {
        return;
      }
      const data = {
        query: (window as any).PluginHelper.getCurrentUsername(),
        limit: "5",
        extraParams: {
          context: "LcmPopulationManager",
          suggestId: "suggest_manager",
        },
      };
      fetch(
        `${window.location.origin}/identityiq/ui/rest/requestAccess/identities/suggest/object/sailpoint.object.Identity`,
        {
          method: "POST",
          headers: { Authorization: "Basic " + btoa("spadmin:admin") },
          body: JSON.stringify(data),
        }
      )
        .then(async (response) => {
          const resp = await response.json();
          setUserName(resp?.objects[0]?.displayName);
        })
        .then((json) => console.log(json));
    }
  });
  return (
    <>
      <div style={{ padding: "20px" }}>
        {props} {userName}
      </div>
    </>
  );
}

export default App;
