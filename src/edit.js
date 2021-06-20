import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	URLInputButton,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import EditImage from "./components/EditImage";
import { getBG } from "./index";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { image, text, title, target, label, inverted } = attributes;
	const bg = getBG(image);
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "gm-block-full-img-txt")}>
					<ToggleControl
						label={__("Inverted", "gm-block-full-img-txt")}
						checked={inverted}
						onChange={() => setAttributes({ inverted: !inverted })}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: inverted ? "gm-full-inverted" : null,
				})}
			>
				<div
					className="gm-full-img"
					style={{
						backgroundImage: bg ? `url(${bg.source_url})` : null,
					}}
				>
					<EditImage props={props} />
				</div>
				<div className="gm-full-content">
					<div className="gm-full-content-inner">
						<RichText
							allowedFormats={[]}
							placeholder={__("The title", "gm-block-full-img-txt")}
							value={title}
							onChange={(content) => setAttributes({ title: content })}
						/>
						<RichText
							allowedFormats={[]}
							placeholder={__("The content", "gm-block-full-img-txt")}
							value={text}
							onChange={(content) => setAttributes({ text: content })}
						/>
						<div className="gm-full-content-action">
							<a>
								<RichText
									allowedFormats={[]}
									placeholder={__("Label", "gm-block-full-img-txt")}
									value={label}
									onChange={(content) => setAttributes({ label: content })}
								/>
								<URLInputButton
									url={target}
									onChange={(_target, post) =>
										setAttributes({
											target: _target,
											label: (post && post.title) || label,
										})
									}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
