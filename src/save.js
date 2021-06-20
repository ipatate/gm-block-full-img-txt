import { useBlockProps, RichText } from "@wordpress/block-editor";
import { getBG } from "./index";

export default function save(props) {
	const { attributes } = props;
	const { image, text, title, target, label, inverted } = attributes;
	const bg = getBG(image);
	return (
		<div
			{...useBlockProps.save({
				className: inverted ? "gm-full-inverted" : null,
			})}
		>
			<div
				className="gm-full-img"
				style={{
					backgroundImage: bg ? `url(${bg.source_url})` : null,
				}}
			/>
			<div className="gm-full-content">
				<div className="gm-full-content-inner">
					<RichText.Content tagName="h2" value={title} />
					<RichText.Content tagName="p" value={text} />
					<div className="gm-full-content-action">
						<a href={target} title={label}>
							<RichText.Content tagName="span" value={label} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
