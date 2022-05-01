import React from "react";
import { ListItem, Divider } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import shortenAddress from "../utils/shortenAddress";

const ReceivedEventCard = ({
  receivedEvent: {
    sequence_number,
    data: { amount, from },
  },
}) => {
  return (
    <div className="ReceivedEvent" key={sequence_number}>
      <ListItem>
        <DownloadIcon sx={{ fontSize: 24, marginRight: 2 }} color="primary" />
        From: {shortenAddress(from)}
        <br />
        Amount: {amount}
        <br />
        Txn No. {sequence_number}
      </ListItem>
      <Divider />
    </div>
  );
};

export default ReceivedEventCard;
