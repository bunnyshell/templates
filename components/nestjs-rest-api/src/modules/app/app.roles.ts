import { RolesBuilder } from "nest-access-control";

export enum AppRoles {
  DEFAULT = "DEFAULT",
}

/**
 * Roles Builder
 */
export const roles: RolesBuilder = new RolesBuilder();

// The default app role doesn't have readAny(profiles) because the profile returned provides a password.
// To mutate the return body of mongoose queries try editing the ProfileService
roles
  .grant(AppRoles.DEFAULT)
    .readAny("profile")
    .updateAny("profile")
    .deleteAny("profile");
