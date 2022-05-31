import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <tr>
                <td>
                  <span>{user.name}</span>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
