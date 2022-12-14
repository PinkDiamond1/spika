import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Stack,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { AccountContext } from "../context/AccountContext";

const Create = () => {
  const {
    newMnemonic,
    handleGenerate,
    handleCreate,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(AccountContext);
  const [checkedLicenseRules, setCheckedLicenseRules] = useState(false);

  useEffect(() => {
    setPassword("");
    setConfirmPassword("");
  }, []);

  const handleChangeLicenseRules = (event) => {
    setCheckedLicenseRules(event.target.checked);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h6" sx={{ mt: 3 }} align="center" color="textPrimary" gutterBottom>
        Create New Account
      </Typography>
      <Card sx={{ mb: 2 }}>
        {newMnemonic === "" ? (
          <CardContent>
            <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
              <InfoIcon color="primary" />
              <br />
              First, let's generate new mnemonic phrase. Make sure to write down all words in
              correct order and store it in a safe place. Remember, mnemonic phrase is a key to your
              account.
            </Typography>
            <Stack sx={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                sx={{ mt: 4 }}
                label={
                  <Typography>
                    I accept the license{" "}
                    <Link
                      href="https://github.com/xorgal/spika/blob/master/LICENSE"
                      underline="none"
                      target="_blank"
                    >
                      {" "}
                      disclaimer
                    </Link>{" "}
                  </Typography>
                }
                control={
                  <Checkbox
                    sx={{ my: -1 }}
                    checked={checkedLicenseRules}
                    onChange={handleChangeLicenseRules}
                  />
                }
              />
            </Stack>
          </CardContent>
        ) : (
          <form className="create-form">
            <input hidden type="text" autoComplete="username" value={undefined}></input>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <TextField
                id="newMnemonic"
                label="Mnemonic phrase"
                margin="normal"
                autoFocus={false}
                autoComplete="off"
                multiline
                rows={3}
                variant="outlined"
                value={newMnemonic}
              />
              <TextField
                sx={{ mt: 2 }}
                id="password"
                label="New Password"
                type="password"
                autoFocus={true}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                sx={{ mt: 2 }}
                id="confirmPassword"
                label="Confirm password"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </CardContent>
          </form>
        )}

        {newMnemonic === "" ? (
          <CardActions>
            {checkedLicenseRules ? (
              <Button variant="contained" onClick={handleGenerate}>
                Generate Mnemonic
              </Button>
            ) : (
              <Button variant="contained" disabled>
                Generate Mnemonic
              </Button>
            )}
          </CardActions>
        ) : (
          <CardActions>
            <Button variant="contained" onClick={handleCreate}>
              Create Account
            </Button>
          </CardActions>
        )}
      </Card>
    </Container>
  );
};

export default Create;
