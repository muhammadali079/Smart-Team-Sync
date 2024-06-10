import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { db } from "@/lib/db";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!orgId || !user) {
      throw new Error("User Not Found");
    }

    const { action, entityId, entityTitle, entityType } = props;

    await db.auditLog.create({
      data: {
        orgId,
        userId: user.id,
        action,
        entityId,
        entityTitle,
        entityType,
        userName: user?.firstName + " " + user?.lastName,
        userImage: user?.imageUrl,
      },
    });
  } catch (error) {
    console.log("AUDIT_LOG_ERROR", error);
  }
};