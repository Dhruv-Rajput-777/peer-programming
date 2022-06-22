export const showParticipants = () => {
  return { type: "SHOW_PARTICIPANTS" };
};

export const addParticipant = (name) => {
  return { type: "ADD_PARTICIPANT", payload: name };
};

export const removeParticipant = (name) => {
  return { type: "REMOVE_PARTICIPANT", payload: name };
};

export const setParticipants = (participants) => {
  return { type: "SET_PARTICIPANTS", payload: participants };
};
