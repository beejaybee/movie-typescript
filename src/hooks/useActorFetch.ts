import { useState, useEffect } from "react";

// api
import apiSettings, { Actor } from "../API"; 

//helpers
import { isPersistedState } from "../helpers";

export type ActorState = Actor;

export const useActorFetch = (actorId: number) => {
    const [state, setState] = useState<Actor>({} as Actor);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchActor = async () => {
            try {
                setLoading(true);
                setError(false);

                const actor = await apiSettings.fetchActor(actorId);

                setState({
                    ...actor
                })
            }catch(error) {
                setError(true)
            }
            setLoading(false)
        }
        const sessionState = isPersistedState(actorId.toString());
        
        if(sessionState) {
            setState(sessionState);
            setLoading(false);
            return
        }

        fetchActor()
    }, [actorId]);

    useEffect(() => {
        sessionStorage.setItem(actorId.toString(), JSON.stringify(state))
    }, [actorId, state]);
    
    return {state, error, loading}
}