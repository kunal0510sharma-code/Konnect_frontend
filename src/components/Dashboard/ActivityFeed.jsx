import React from 'react'
import { Avatar } from 'antd'
import { GitCommit } from 'lucide-react'
import dayjs from 'dayjs'

import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const ActivityFeed = ({ data = [], loading = false, title = "Recent Activity" }) => {

  return (
    <div className="premium-card">

      <h3 style={{ marginBottom: 16 }}>{title}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

        {data.map((act, i) => (
          <div key={i} style={{ display: 'flex', gap: 12 }}>

            {/* ICON */}
            <Avatar
              size={32}
              icon={<GitCommit size={16} />}
              style={{ background: '#1E6FD9' }}
            />

            {/* CONTENT */}
            <div style={{ flex: 1 }}>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <div style={{ fontWeight: 600 }}>
                  {act.repo}
                </div>

                <div style={{ fontSize: 12, color: '#6b7280' }}>
                  {dayjs(act.time).fromNow()}
                </div>
              </div>

              <div style={{ marginTop: 4 }}>
                {act.message}
              </div>

              <div style={{
                marginTop: 6,
                fontSize: 13,
                color: '#6b7280'
              }}>
                {act.author}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default ActivityFeed