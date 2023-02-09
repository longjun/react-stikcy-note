import React, { useState, useCallback } from "react"

interface Props {
	note: Note;
}

const StickyNote: React.FC<Props> = (props) => {
	const [note, setNote] = useState<Note>(props.note)
	const handleMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		const { left, top } = event.currentTarget.getBoundingClientRect();
		const handleMouseMove = (event: MouseEvent) => {
			setNote({ ...note, position: {
				x: event.pageX,
				y: event.pageY
			}})
		}
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", handleMouseMove);
      },
      {
        once: true,
      }
    );
	}, [])
	return (
		<div
			className="sticky-note"
      style={{ top: note.position.y, left: note.position.x }}
			onMouseDown={handleMouseDown}
		>
			<div className="sticky-note__header">header</div>
			<div className="sticky-note__content">
				<textarea
					defaultValue={note.content}
				></textarea>
			</div>
		</div>
	)
}

export default StickyNote;