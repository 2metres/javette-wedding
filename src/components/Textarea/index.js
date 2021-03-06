import React from 'react'
import classNames from 'classnames/bind'

import styles from './module.scss'

const Textarea = ({
  question,
  action,
  value,
}) => (
  <div className={classNames(styles.root, 'form-group')}>
    <label htmlFor={question.slug} className={styles.label}>{ question.prompt }</label>
    <textarea
      id={question.slug}
      onChange={e => action(question.slug, e.target.value)}
      className="form-control"
      value={value}
    />
    { question.hint &&
      <div className={styles.hint}>{ question.hint }</div>
    }
  </div>
)

export default Textarea
